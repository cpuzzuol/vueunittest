// https://stackoverflow.com/questions/45016033/how-do-i-test-axios-in-jest
// https://vue-test-utils.vuejs.org/guides/using-with-vuex.html

import { shallowMount, createLocalVue } from '@vue/test-utils'
import Widgets from '@/components/Widgets.vue'
import Vuex from 'vuex'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Widgets.vue', () => {
  let actions
  let store
  const name = 'new message'

  beforeEach(() => {
    actions = {
      setWidgets: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  const factory = (values = {}) => {
    return shallowMount(Widgets, {
      store,
      localVue,
      //spy,
      propsData: { name },
      data() { return values },
      // methods: {
      //   getWidgets() {}
      // }
    })
  }

  it('widget name should be passed', () => {
    const wrapper = factory({})
    expect(wrapper.find('.name').text()).toMatch(name)
  })

  // MOCK AXIOS API CALL!
  it('returns data when getWidgets is called', () => {
    let mock = new MockAdapter(axios)
    const data = [
      {id: 1, name: "A"},
      {id: 2, name: "B"}
    ]

    mock.onGet('https://fakecall.com')
      .reply(200, data)

    // Call mock request
    return axios.get('https://fakecall.com')
      .then(res => {
        expect(res.data.length).toBe(2);
      });
  })

  it('should run the callback when clicked', () => {
    // https://stackoverflow.com/questions/45787562/how-to-sinon-spy-a-vue-component-method-triggered-by-a-vue-event
    // Spy must be created BEFORE the factory!
    const spy = jest.spyOn(Widgets.methods, 'getWidgets')
    const wrapper = factory({})
    const button = wrapper.find('button')
    button.trigger('click')
    expect(spy).toHaveBeenCalled()

  })

  it('should convert the input to UPPERCASE', () => {
    const wrapper = factory({})
    expect(wrapper.vm.myWidgetFn('bob')).toEqual('BOB')
  })
})


