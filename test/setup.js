/*import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
require('babel-register')()

var jsdom = require('jsdom')
const { JSDOM } = jsdom;

var exposedProperties = ['window', 'navigator', 'document']

const { document } = (new JSDOM('')).window
global.document = document
global.window = document.defaultView

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}

const noop = () => {};

require.extensions['.css'] = noop
require.extensions['.ico'] = noop
require.extensions['.png'] = noop
require.extensions['.svg'] = noop

//documentRef = document
window.matchMedia = window.matchMedia || function() {
	return {
		matches : false,
		addListener : function() {},
		removeListener: function() {}
	};
};*/