import * as TodoActions from './todoActions'
import * as ModalAction from './modalAction'
import * as ColorAction from './colorAction'
import * as AlertAction from './alertAction'
import * as PostAction from './postAction'

export const Actions =  {
    ...TodoActions,
    ...ModalAction,
    ...ColorAction,
    ...AlertAction,
    ...PostAction
}