import React, {useEffect, useState} from "react";
import hockey_rink from '../images/hockey_rink.svg'
import PlayerIcon from "./PlayerIcon";
import PlayerList from "./PlayerList";
import Calendar from "./Calendar"
import Menu from "./Menu";
import Select from 'react-select';
import PlayerIcons from "./PlayerIcons";
import {getEcgData, getGnssData, getHeartRateData} from "../service/sensorDataService"




// The main component that connects the hockey rink, player icons, player list and the player menus.
// TODO: Should fetch ECG data from the database.
// TODO: Should fetch GNSS data from the database and use the location data to place the player
//  icons in the rink.
// TODO: Should fetch IMU data from the database to show player's acceleration etc.
const DashBoard = () => {
    const [showMenu, setShowMenu] = useState(true)
    const [showHeartPopUp, setShowHeartPopUp] = useState(false)
    const [showEcgPopUp, setShowEcgPopUp] = useState(false)
    const [selectedPlayer, setSelectedPlayer] = useState(null)
    const [isSelected, setIsSelected] = useState(false)
    const [hoveredPlayer, setHoveredPlayer] = useState(null)
    const [playerIsClicked, setPlayerIsClicked] = useState(false)
    const [heartRate, setHeartRate] = useState(null)
    const [ecg, setEcg] = useState(null)


    const [lat, setLat] = useState(11)
    const [long, setLong] = useState(11)
    const maxLat = 570
    const maxLong = 370
    const minLat = 10
    const minLong = 10




    const [direction, setDirection] = useState(1)


    // Placeholder for simulating the players movement until actual gnss data
    // can be used.
    useEffect(() => {
        const interval = setInterval(() => {
            setLat(prevLat => {
                if (direction === 1 && prevLat + 10 >= maxLat) {
                    setDirection(-1)
                    return prevLat
                }
                if (direction === -1 && prevLat - 10 <= minLat) {
                    setDirection(1)
                    return prevLat
                }
                return prevLat + 10 * direction
            })

            setLong(prevLong => {
                if (direction === 1 && prevLong + 10 >= maxLong) return prevLong
                if (direction === -1 && prevLong - 10 <= minLong) return prevLong
                return prevLong + 10 * direction
            })
        }, 500)

        return () => clearInterval(interval)
    }, [direction])





    // When a player's name or icon is clicked, show the menu for that player.
    // TODO: Make it so that if a different player is selected, it opens the
    // player menu of that player while also closing the player menu of the
    // previously selected player. Currently if a player is selected and
    // a new player is selected, the menu closes for the previous player, but
    // doesn't open for the newly selected player.
    const toggleMenu = (player) => {
        setSelectedPlayer(player)
        fetchHeartRate(player.id).then(response => setHeartRate(response))
        fetchEcg(player.id).then(response => setEcg(response))
        setIsSelected(prev => !prev)
        /*
        if(isSelected){
            setShowMenu(true)
        }
 
 
         */
        //setShowMenu(prev => !prev)
        /*
        if(!showMenu){
            setShowMenu(true)
        } else {
            setShowMenu(false)
        }
         */
    }


    const fetchHeartRate = async (id) => {
        try{
            const data = await getHeartRateData(id)
            console.log('response data', data)
            console.log(data.Average_BPM)
            return data.Average_BPM
        } catch (err){
            console.log(err)
        }
    }


    const fetchEcg = async (id) => {
        try{
            const data = await getEcgData(id)
            return data.Samples
        } catch(err){
            console.log(err)
        }
    }


    const fetchGnss = async (id) => {
        try{
            const data = await getGnssData(id)
            const {Latitude, Longitude} = data
            return data
        } catch (err){
            console.log(err)
        }
    }

    


    // Placeholder example players
    const players = [
        {
            id:1,
            name: "Teemu Selänne",
            heart_rate: heartRate,
            ecg: ecg,
            top: lat,
            left: "200px",
            teamColor: "red"
        },
        {
            id:2,
            name: "Jesse Puljujärvi",
            heart_rate: heartRate,
            ecg: ecg,
            top: "200px",
            left: long,
            teamColor: "red"
        },
        {
            id:3,
            name: "Valtteri Filppula",
            heart_rate: heartRate,
            ecg: ecg,
            top: "319px",
            left: "130px",
            teamColor: "red"
        },
        {
            id:4,
            name: "Patrick Kane",
            heart_rate: heartRate,
            ecg: ecg,
            top: "99px",
            left: "90px",
            teamColor: "red"
        },
        {
            id:5,
            name: "Jonathan Quick",
            heart_rate: heartRate,
            ecg: ecg,
            top: "180px",
            left: "130px",
            teamColor: "red"
        },
        {
            id:6,
            name: "Brent Seabrook",
            heart_rate: heartRate,
            ecg: ecg,
            top: "220px",
            left: "440px",
            teamColor: "red"
        },
        {
            id:7,
            name: "Connor McDavid",
            heart_rate: heartRate,
            ecg: ecg,
            top: "135px",
            left: "451px",
            teamColor: "blue"
        },
        {
            id:8,
            name: "Auston Matthews",
            heart_rate: heartRate,
            ecg: ecg,
            top: "342px",
            left: "380px",
            teamColor: "blue"
        },
        {
            id:9,
            name: "Nathan MacKinnon",
            heart_rate: heartRate,
            ecg: ecg,
            top: "300px",
            left: "400px",
            teamColor: "blue"
        },
        {
            id:10,
            name: "Sebastian Aho",
            heart_rate: heartRate,
            ecg: ecg,
            top: "350px",
            left: "90px",
            teamColor: "blue"
        },
        {
            id:11,
            name: "Tuukka Rask",
            heart_rate: heartRate,
            ecg: ecg,
            top: "180px",
            left: "260px",
            teamColor: "blue"
        },
        {
            id:12,
            name: "Miro Heiskanen",
            heart_rate: heartRate,
            ecg: ecg,
            top: "290px",
            left: "440px",
            teamColor: "blue"
        }
    ]


    const playerOptions = players.map((player => {
        return {
            value: player.id,
            label: player.name
        }
    }))


    const rinkStyle = {
        width: "600px",
        height: "410px",
        border: "2px solid #000",
        marginTop: "50px",
        position: "relative",
        backgroundColor: "white"
    }
    return (
        <div style={{
            display: "flex",
            alignItems: "stretch"
        }}>
            <Calendar/>
            <div style={rinkStyle} title={"rink container"}>
                <img
                    src={hockey_rink}
                    alt={"hockey rink"}
                    style={{
                        height:"100%",
                        width:"100%",
                        objectFit: "cover"
                    }}
                />
                <PlayerIcons
                    players={players}
                    selectedPlayer={selectedPlayer}
                    setSelectedPlayer={setSelectedPlayer}
                    onPlayerClick={toggleMenu}
                    hoveredPlayer={hoveredPlayer}
                    onHover={setHoveredPlayer}
                    onLeave={() => setHoveredPlayer(null)}
                    onPlayerSelect={setSelectedPlayer}
                    playerIsClicked={playerIsClicked}
                    setPlayerIsClicked={setPlayerIsClicked}
                />
            </div>
            <PlayerList
                players={players}
                onPlayerClick={toggleMenu}
                selectedPlayer={selectedPlayer}
                setSelectedPlayer={setSelectedPlayer}
                hoveredPlayer={hoveredPlayer}
                onHover={setHoveredPlayer}
                onLeave={() => setHoveredPlayer(null)}
                onPlayerSelect={setSelectedPlayer}
                playerIsClicked={playerIsClicked}
                setPlayerIsClicked={setPlayerIsClicked}
            />


            {/*
               <label>
                   <Select
                       options={playerOptions}
                       menuIsOpen={true}
                       defaultValue={playerOptions[0]}
                       placeholder={"Choose a player"}
                       styles={{
                           width: "70px"
                       }}
                   />
               </label>
               */}


            <Menu
                player={selectedPlayer}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                showEcgPopUp={showEcgPopUp}
                setShowEcgPopUp={setShowEcgPopUp}
                showHeartPopUp={showHeartPopUp}
                setShowHeartPopUp={setShowHeartPopUp}
            />
        </div>
    )
}
export default DashBoard



