// https://stackoverflow.com/questions/45016033/how-do-i-test-axios-in-jest
// https://vue-test-utils.vuejs.org/guides/using-with-vuex.html

import { shallowMount, createLocalVue } from '@vue/test-utils'
import Widgets from '@/components/Widgets.vue'
import Vuex from 'vuex'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import sinon from 'sinon'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Widgets.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      setWidgets: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  it('widget name should be passed', () => {
    const name = 'new message'
    const wrapper = shallowMount(Widgets, {
      store,
      localVue,
      propsData: { name }
    })
    expect(wrapper.text()).toMatch(name)
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
    const spy = sinon.spy()
    const mockCallback = jest.fn()

    const wrapper = shallowMount(Widgets, {
      store,
      localVue,
      propsData: { name }
    })
    const button = wrapper.find('button')
    button.trigger('click')
    spy.should.have.been.mockCallback()

  })
})


