import { SET_AUTHEDUSER } from './types'
import { UNSET_AUTHEDUSER } from './types'

export function setAuthedUser(id) {
    return {
        type: SET_AUTHEDUSER,
        id
    }
}

export function unsetAuthedUser() {
    return {
        type: UNSET_AUTHEDUSER
    }
}