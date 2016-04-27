import React from 'react'
import {mount, shallow, render} from 'enzyme'
import ChaiEnzyme from 'chai-enzyme'
import chai, {expect} from 'chai'

chai.use(ChaiEnzyme())

import Panel from '../components/panel'


describe('<Panel />', () => {
	it('component default state', () => {
		// let wrapper = mount(<Button>Test</Button>)
		// expect(wrapper).to.have.text('Test')
		// expect(wrapper).to.have.className('ui-btn')
		// expect(wrapper).to.not.be.disabled()
	})
})

