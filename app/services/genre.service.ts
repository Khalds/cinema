import axios from 'axios'

import { getGenreUrl } from '@/config/api.config'
import { IGenre } from '@/shared/types/movie.types'

export const GenreService = {
	async getPopularGenres(limit = 4) {
		return axios.get<IGenre[]>(getGenreUrl('/popular'),{
      params:{
        limit
      }
    })
	},
}
