'use strict'

const milestoneTypes = [
    'Develop', 
    'VideoGames', 
    'Design', 
    'Meeting'
];

const milestoneDifficulty = [
    'Easy', 
    'Medium', 
    'Hard', 
    'Team'
];

const teams = [
    'general', 
    'developer', 
    'game'
];

const role = [
    'admin', 
    'mentor', 
    'teamPartner', 
    'corer'
];

const status = [
    'new', 
    'pending', 
    'ongoing', 
    'finished'
];

const modelsName = {
    milestone: 'Milestone',
    user: 'User'
}

module.exports = {
    milestoneTypes,
    milestoneDifficulty,
    teams,
    role,
    modelsName,
    status
}