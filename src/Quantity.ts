import { ShipmentDescriptionCode } from './ShipmentDescriptionCode'
import { Weight } from './Weight'

export interface Quantity {
    shipmentDescriptionCode: ShipmentDescriptionCode
    numberOfPieces: number
    weight?: Weight
}
