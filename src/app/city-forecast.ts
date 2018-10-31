export class CityForecast {
    'location': {
        'name': string,
        'region': string,
        'country': string,
        'lat': number,
        'lon': number,
        'tz_id': string,
        'localtime_epoch': number,
        'localtime': number
      };
      'current': {
        'last_updated_epoch': number,
        'last_updated': string,
        'temp_c': number,
        'temp_f': number,
        'is_day': number,
        'condition': {
          'text': string,
          'icon': string,
          'code': number
        },
        'wind_mph': number,
        'wind_kph': number,
        'wind_degree': number,
        'wind_dir': string,
        'pressure_mb': number,
        'pressure_in': number,
        'precip_mm': number,
        'precip_in': number,
        'humidity': number,
        'cloud': number,
        'feelslike_c': number,
        'feelslike_f': number,
        'vis_km': number,
        'vis_miles': number
      };
      'forecast': {
        'forecastday': [
          {
            'date': string,
            'date_epoch': number,
            'day': {
              'maxtemp_c': number,
              'maxtemp_f': number,
              'mintemp_c': number,
              'mintemp_f': number,
              'avgtemp_c': number,
              'avgtemp_f': number,
              'maxwind_mph': number,
              'maxwind_kph': number,
              'totalprecip_mm': number,
              'totalprecip_in': number,
              'avgvis_km': number,
              'avgvis_miles': number,
              'avghumidity': number,
              'condition': {
                'text': string,
                'icon': string,
                'code': number
              },
              'uv': number
            },
            'astro': {
              'sunrise': string,
              'sunset': string,
              'moonrise': string,
              'moonset': string
            }
          }
        ]
      };
}
