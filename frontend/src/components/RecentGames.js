import React from "react";

const RecentGames = () => {
    const games = [
        {
            id: 1,
            team1: "Florida",
            team2: "Calgary",
            score: "2 - 0"
        },
        {
            id: 2,
            team1: "Anaheim",
            team2: "Chicago",
            score: "2 - 0"
        }
    ]
    const style = {
        backgroundColor: 'white',
        width: '150px'
    }
    return (
        <div className="recent-games">
            <table style={style}>
                <thead>
                <tr>
                    Recent Games
                </tr>
                </thead>
                <tr style={{
                    backgroundColor: '#8d95a7'
                }}>
                    <td style={{
                        backgroundColor: '#8d95a7'
                    }}>
                        {games[0].team1} - {games[0].team2} <br/>
                        Score: <br/>
                        {games[0].score}
                    </td>
                </tr>
                <tr style={{
                    backgroundColor: '#8d95a7'
                }}>
                    <td style={{
                        backgroundColor: '#8d95a7'
                    }}>
                        {games[1].team1} - {games[1].team2} <br/>
                        Score: <br/>
                        {games[1].score}
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default RecentGames