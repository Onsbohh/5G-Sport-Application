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
        },
        {
            id: 3,
            team1: "Calgary",
            team2: "Pittsburgh",
            score: "2 - 5"
        },
        {
            id: 4,
            team1: "Edmonton",
            team2: "Florida",
            score: "2 - 5"
        },
        {
            id: 5,
            team1: "Anaheim",
            team2: "Florida",
            score: "2 - 5"
        }
    ]
    const style = {
        backgroundColor: 'white',
        width: '150px'
    }

    const showGames = () => {
        return games.map((game) => (
            <tr key={game.id} style={{}}></tr>
        ))}
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