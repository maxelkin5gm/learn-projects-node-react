import {makeAutoObservable} from "mobx";

class CounterState {
    test = 0
    count = {
        count1: {
            count2: {
                count3: {
                    count4: 0
                }
            }
        }
    }

    constructor() {
        makeAutoObservable(this)
    }

    inc() {
        this.count.count1.count2.count3.count4++
    }

    dec() {
        this.count.count1.count2.count3.count4--
    }

    get doubleCount() {
        console.log('calc')
        return this.count.count1.count2.count3.count4 * 2;
    }
}

export const counterState = new CounterState()