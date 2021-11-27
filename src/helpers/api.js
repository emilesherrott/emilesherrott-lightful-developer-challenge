export const apiEndPoint = 'https://charitybase.uk/api/graphql'

export const apiQuery = '{CHC{getCharities(filters:{}){ list(limit: 30){ id names {value} causes {name} finances {income spending} grants {title description funder {name} amountAwarded currency awardDate} contact {address email phone postcode social {platform handle}}} }}}'

export const apiQueryOne = '{CHC{getCharities(filters:{id:'

export const apiQueryTwo = '}){ list(limit: 1){ id names {value} causes {name} finances {income spending} grants {title description funder {name} amountAwarded currency awardDate} contact {address email phone postcode social {platform handle}}} }}}'

export const apiKey = '8b239e23-2239-4185-b111-304be0dba780'