export const initialState = () => ({
  loading: true,
  error: null,
  data: {
    name: "",
    coord: {},
    weather: [{}],
    sys: {},
    main: {},
    timezone_offset: 0,
    wind: {},
    daily: [
      {
        weather: [],
        temp: {}
      }
    ],
    hourly: [
      {
        temp: 0,
        pop: 0,
        dt: 0
      }
    ]
  }
})
