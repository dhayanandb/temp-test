import { Addressing } from './Addressing'
import { EdifactMessageHeader } from './EdifactMessageHeader'

export interface MessageHeader {
    addressing: Addressing
    creationDate: string
    editfactData: EdifactMessageHeader
}
