import config from '../config';
import {
    fetchAddressRequest,
    fetchAddressSuccess,
    fetchAddressFailure,
    addAddressRequest,
    addAddressSuccess,
    addAddressFailure,
    updateAddressRequest,
    updateAddressSuccess,
    updateAddressFailure,
    deleteAddressRequest,
    deleteAddressSuccess,
    deleteAddressFailure,
} from './actions';

// Fetch all addresses
export const fetchAddresses = () => {
    return async (dispatch) => {
        dispatch(fetchAddressRequest());
        try {
            const res = await fetch(`${config.BASE_URL}/address`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            const data = await res.json();

            if (res.ok) {
                dispatch(fetchAddressSuccess(data));
            } else {
                dispatch(fetchAddressFailure(data.message || 'Failed to fetch addresses'));
            }
        } catch (error) {
            dispatch(fetchAddressFailure(error.message));
        }
    };
};

// Add new address
export const addAddress = (addressData) => {
    return async (dispatch) => {
        dispatch(addAddressRequest());
        try {
            const res = await fetch(`${config.BASE_URL}/address/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(addressData),
            });
            const data = await res.json();

            if (res.ok) {
                dispatch(addAddressSuccess(data));
                // Refetch addresses to get updated list
                dispatch(fetchAddresses());
            } else {
                dispatch(addAddressFailure(data.message || 'Failed to add address'));
            }
        } catch (error) {
            dispatch(addAddressFailure(error.message));
        }
    };
};

// Update existing address
export const updateAddress = (addressId, addressData) => {
    return async (dispatch) => {
        dispatch(updateAddressRequest());
        try {
            const res = await fetch(`${config.BASE_URL}/address/update/${addressId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(addressData),
            });
            const data = await res.json();

            if (res.ok) {
                dispatch(updateAddressSuccess(data));
                // Refetch addresses to get updated list
                dispatch(fetchAddresses());
            } else {
                dispatch(updateAddressFailure(data.message || 'Failed to update address'));
            }
        } catch (error) {
            dispatch(updateAddressFailure(error.message));
        }
    };
};

// Delete address
export const deleteAddress = (addressId) => {
    return async (dispatch) => {
        dispatch(deleteAddressRequest());
        try {
            const res = await fetch(`${config.BASE_URL}/address/delete/${addressId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (res.ok) {
                dispatch(deleteAddressSuccess(addressId));
            } else {
                const data = await res.json();
                dispatch(deleteAddressFailure(data.message || 'Failed to delete address'));
            }
        } catch (error) {
            dispatch(deleteAddressFailure(error.message));
        }
    };
};
