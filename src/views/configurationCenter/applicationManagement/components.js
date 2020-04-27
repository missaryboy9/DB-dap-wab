export default {
    components: {
        add: {
            render(h) {
                return (
                    <div>
                        <button on-click={this.add}>+</button>
                        { this.addis }
                        <button on-click={this.reduce}>-</button>
                    </div>
                )
            },
            data() {
                return {
                    addis: 1
                }
            },
            methods: {
                add() {
                    this.addis++
                },
                reduce() {
                    this.addis--
                }
            }
        }
    }
}
