require.config({
  baseUrl:'/static/scripts',
  paths: {
    'fb': 'modules/fb',
    'tw': 'modules/tw',
    'async': 'libs/require.async',
    'autotab' : 'libs/jquery.autotab',
    'alphanumeric': 'libs/jquery.alphanumeric',
    'registerForm': 'modules/register-form',
    'easyModal': 'modules/easy-modal',
    'easySlider': 'modules/easy-slider',
    'easyForm': 'modules/easy-form',
    'easySearch': 'modules/easy-search',
    'floatedLabel': 'libs/floated.label',    
    'validate': 'libs/jquery.validate/jquery.validate',
    'jquery': 'libs/jquery-1.11.0',
    'validateExt':'libs/jquery.validate/additional-methods',
    'datepicker':'libs/jquery-ui-1.10.4.datepicker',
    'jqueryUI': 'libs/jquery-ui-1.9.2.custom'
  },
  shim: {
    'alphanumeric':[
      'jquery'
    ],
    'validate' : [
      'jquery'
    ],
    'validateExt':[
      'validate'
    ],
    'floatedLabel' : [
      'jquery'
    ],
    'autotab' : [
      'jquery'
    ],
    'jqueryUI':[
      'jquery'
    ],
    'easySearch' : [
      'jqueryUI'
    ],
    'easyModal': [
      'jquery'
    ],
    'easyForm': [
      'jquery'
    ]
  }
});