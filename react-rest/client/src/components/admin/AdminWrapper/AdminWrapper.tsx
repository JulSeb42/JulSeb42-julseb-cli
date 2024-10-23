/*=============================================== AdminWrapper component ===============================================*/

import { StyledAdminWrapper } from "./styles"
import type { IAdminWrapper } from "./types"

export const AdminWrapper: FC<IAdminWrapper> = ({  children, }) => {
    return (
        <StyledAdminWrapper>
            {children}
        </StyledAdminWrapper>
    )
}
