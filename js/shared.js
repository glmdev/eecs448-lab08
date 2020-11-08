window.uJ = (function() {
    class MicroJ {
        tag(selector) {
            return document.querySelector(selector)
        }

        tags(selector) {
            return document.querySelectorAll(selector)
        }

        tag_or_fail(selector) {
            const tag = this.tag(selector)

            if ( !tag ) {
                throw new Error(`Unable to find tag for selector ${selector}`)
            }

            return tag
        }

        btn(selector, handler) {
            const btn = this.tag_or_fail(selector)

            btn.addEventListener('click', (e) => {
                return handler(btn, e)
            })
        }

        input(selector, set = undefined) {
            const input = this.tag_or_fail(selector)

            if ( typeof set === 'undefined' ) {
                return input.value
            }

            input.value = set
        }

        message_container(selector, message = '') {
            const ctr = this.tag_or_fail(selector)

            return (value = undefined) => {
                if ( typeof value === 'undefined' ) {
                    return message
                }

                message = value
                ctr.innerHTML = message
            }
        }
    }

    return new MicroJ()
})()