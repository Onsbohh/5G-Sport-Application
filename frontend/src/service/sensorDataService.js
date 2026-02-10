import httpService from "./httpService";

console.log(httpService.defaults.baseURL);

// ECG Data Services
export const getAllEcgData = async () => {
    const response = await httpService.get("/ecg");
    return response.data;
}

export const getEcgData = async (id) => {
    const response = await httpService.get(`/ecg/${id}`);
    return response.data;
}

export const getEcgByTimestamp = async (start, end) => {
    const response = await httpService.get(`/ecg/timestamp?start=${start}&end=${end}`);
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
    const response = await httpService.get("/gnss/");
    return response.data;
}

export const getGnssData = async (id) => {
    const response = await httpService.get(`/gnss/${id}`);
    return response.data;
}

export const getGnssByTimestamp = async (timestamp) => {
    const response = await httpService.get(`/gnss/timestamp?start=${timestamp}&end=${timestamp}`);
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
// Needs to be changed to use only one timestamp parameter
export const getHeartRateByTimestamp = async (start ,end) => {
    const response = await httpService.get(`/heartrate/timestamp?start=${start}&end=${end}`);
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

export const getImuByTimestamp = async (timestamp) => {
    const response = await httpService.get(`/imu/timestamp?start=${timestamp}&end=${timestamp}`);
    return response.data;
}







