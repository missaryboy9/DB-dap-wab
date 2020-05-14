  import store from '@/src/store'

    window.onload = _ => {
      class sendemit {
      get message () {
        return store.state.message
      }
      set message (val) {
        store.state.message = val
      }
      emit(value, msg) {
        if (!this.message[ value ]) return
        this.message[ value ].forEach(element => {
          element(msg)
        });
      }
      on(value, fnevent) {
        if (this.message[ value ]) {
          this.message[ value ] = [ fnevent ]
        } else {
          this.message[ value ].push(fnevent)
        }
      }
      del(val) {
        this.message[val] = []
      }
    }
      Object.defineProperty(window, '$postmessage', {
        get() {
          // eslint-disable-next-line new-cap
          return new sendemit()
        }
      })
    }

