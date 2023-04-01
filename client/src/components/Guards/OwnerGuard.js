import { useContext } from 'react';
import { useParams, Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { DesignsContext } from '../../contexts/DesignsContext';


export const OwnerGuard = ({
    children,
}) => {
    const { designId } = useParams();
    const { getDesign } = useContext(DesignsContext);
    const { userId } = useContext(AuthContext);

    const currentDesign = getDesign(designId);

    if (currentDesign && currentDesign._ownerId !== userId) {
        return <Navigate to={`/details/${designId}`} replace />
    }

    return children ? children : <Outlet />
};