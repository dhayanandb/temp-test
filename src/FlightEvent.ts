import { SplitConsignment } from './SplitConsignment'

export interface FlightEvent {
    type: string
    airWaybillNumber: string
    consignments: SplitConsignment
    otherServiceInformation?: string
}
