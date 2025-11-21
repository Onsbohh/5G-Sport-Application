import httpService from "./httpService";

// ECG Data Services
export const getAllEcgData = async () => {
    const response = await httpService.get("/ecg");
    return response.data;
}

export const getEcgData = async (id) => {
    const response = await httpService.get(`/ecg/${id}`);
    return response.data;
}

/* Backend does not support POST, PUT, DELETE
export const postEcgData = async (ecgData) => {
    const response = await httpService.post("/ecg", ecgData);
    return response.data;
}

export const putEcgData = async (id, ecgData) => {
    const response = await httpService.put(`/ecg/${id}`, ecgData);
    return response.data;
}

export const deleteEcgData = async (id) => {
    const response = await httpService.delete(`/ecg/${id}`);
    return response.data;
}*/

// GNSS Data Services
export const getAllGnssData = async () => {
    const response = await httpService.get("/gnss");
    return response.data;
}

export const getGnssData = async (id) => {
    const response = await httpService.get(`/gnss/${id}`);
    return response.data;
}

// HEARTRATE Data Services
export const getAllHeartRateData = async () => {
    const response = await httpService.get("/heartrate");
    return response.data;
}

export const getHeartRateData = async (id) => {
    const response = await httpService.get(`/heartrate/${id}`);
    return response.data;
}

// IMU Data Services
export const getAllImuData = async () => {
    const response = await httpService.get("/imu");
    return response.data;
}

export const getImuData = async (id) => {
    const response = await httpService.get(`/imu/${id}`);
    return response.data;
}

export default getHeartRateData






