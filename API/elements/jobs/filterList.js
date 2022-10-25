export const numberOfApplicants = [
  {id: 1, value: {"min": 0, "max": 4}, label: 'Less than 5'},
  {id: 2, value: {"min": 5, "max": 10}, label: '5 to 10'},
  {id: 3, value: {"min": 10, "max": 15}, label: '10 to 15'},
  {id: 4, value: {"min": 15, "max": 20}, label: '15 to 20'},
  {id: 5, value: {"min": 20, "max": 50}, label: '20 to 50'},
]

export const jobTypesFilter = [
  {id: 1, value: 'Pay by the hour', label: 'Hourly'},
  {id: 2, value: 'Pay a fixed price', label: 'Fixed-Price'},
]

export const jobRatesFilter = [
  {id: 1, value: {"min": 0, "max": 99}, label: 'Less than $100'},
  {id: 2, value: {"min": 100, "max": 500}, label: '$100 - $500'},
  {id: 3, value: {"min": 500, "max": 1000}, label: '$500 - $1k'},
  {id: 4, value: {"min": 1000, "max": 5000}, label: '$1k - $5k'},
  {id: 5, value: {"min": 5000, "max": 20000}, label: '$5k+'},
]
