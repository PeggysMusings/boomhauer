import { SelectedImgProps } from "../types/app.types";
import axios from "axios";

export const resolvers = {
    Query: {
        selectedImg: async () => {
            try {
                const { data } = await axios.get("http://localhost:5032/postgres/koth")
                return data.map((selectedImg: SelectedImgProps) => ({
                    id: selectedImg.id,
                    episode: selectedImg.episode,
                    timestamp: selectedImg.timestamp,
                    quote: selectedImg.quote,
                    url: selectedImg.url
                }))
            } catch (error) {
                throw error
            }
    }
}
}