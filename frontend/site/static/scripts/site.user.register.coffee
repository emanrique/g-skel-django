require([
  'easyForm',
  'registerForm'
], ( $, EasyForm, RegisterForm) ->

    defaults = {}
    st = {}
    dom = {}

    catchDom = () ->
        dom.document = $(document)
        return

    afterCatchDom = () ->
        EasyForm.setup()
        RegisterForm.setupRegisterForm()
        return

    suscribeEvents = ->
        return

    fn = {

    }

    initalize = ()->
        opts = {}
        st = $.extend({}, defaults, opts)
        catchDom(st)
        afterCatchDom()
        suscribeEvents()
        return

    dom.document.ready(initialize)
    return
)
