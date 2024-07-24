import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
import axios from "axios";
const endpointSearch = (searchQuery) =>
    `http://127.0.0.1:8000/api/search/?keyword=${encodeURIComponent(searchQuery)}`;
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchJobs = useCallback(async() => {
        setLoading(true);
        try{
            const response = await axios.get(endpointSearch(searchTerm));
            const data = await response.data["results"];
            if(data){
                const newJobs = data.map((job) => {
                    const {CongTy, HanNopCV, Image, KinhNghiem, Link, LoaiHinh, Luong, NganhCon, TenCV, TinhThanh, Web, ID, MoTa, YeuCau, PhucLoi, CapBac, LuongTB, KhoangLuong, SoLuong} = job;

                    return {
                        Link: Link,
                        CongTy: CongTy,
                        Image: Image,
                        LoaiHinh: LoaiHinh,
                        HanNopCV: HanNopCV,
                        KinhNghiem:KinhNghiem,
                        Luong: Luong,
                        NganhCon: NganhCon,
                        TenCV: TenCV,
                        TinhThanh: TinhThanh,
                        Web: Web,
                        ID: ID,
                        MoTa: MoTa,
                        YeuCau: YeuCau,
                        PhucLoi: PhucLoi,
                        CapBac: CapBac,
                        LuongTB: LuongTB,
                        KhoangLuong: KhoangLuong,
                        SoLuong: SoLuong,
                    }
                });

                setJobs(newJobs);
                if(newJobs.length > 0 && searchTerm !== ""){
                    setResultTitle(`Tìm thấy ${newJobs.length} tin phù hợp với từ khóa "${searchTerm}"`);
                } else if (newJobs.length > 0 && searchTerm === ""){
                    setResultTitle(`Tìm thấy ${newJobs.length} tin`);
                }
                else {
                    setResultTitle("Chúng tôi không tìm thấy!")
                }
            } else {
                setJobs([]);
                setResultTitle("Chúng tôi không tìm thấy!");
            }
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchJobs();
    }, [searchTerm, fetchJobs]);

    return (
        <AppContext.Provider value = {{
            loading, jobs, setSearchTerm, resultTitle, setResultTitle, searchTerm
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};