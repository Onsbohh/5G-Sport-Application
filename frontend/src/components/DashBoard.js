import React, {useEffect, useState} from "react";
import hockey_rink from '../images/hockey_rink.svg'
import PlayerIcon from "./PlayerIcon";
import PlayerList from "./PlayerList";
import Calendar from "./Calendar"
import Menu from "./Menu";
import Select from 'react-select';
import PlayerIcons from "./PlayerIcons";
import {getEcgData, getHeartRateData} from "../service/sensorDataService"


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


    useEffect(() => {
        if(selectedPlayer){
            console.log('selected player is' + selectedPlayer)
        } else {
            console.log('no player is selected yet')
        }
    }, [selectedPlayer]);

    // Placeholder example players
    const players = [
        {
            id:1,
            name: "Teemu Selänne",
            heart_rate: heartRate,
            ecg: ecg,
            top: "100px",
            left: "200px"
        },
        {
            id:2,
            name: "Jesse Puljujärvi",
            heart_rate: heartRate,
            ecg: ecg,
            top: "200px",
            left: "200px"
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
        backgroundColor: "white",
        marginLeft: "300px"
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