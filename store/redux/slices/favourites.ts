import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState: {
		ids: [] as string[]
	},
	reducers: {
		add: (state, action: PayloadAction<{ id: string }>) => {
			state.ids.push(action.payload.id);
		},
		remove: (state, action: PayloadAction<{id: string}>) => {
			state.ids.splice(state.ids.indexOf(action.payload.id), 1)
		}
	}
});

export const addFavourite = favouritesSlice.actions.add;
export const removeFavourite = favouritesSlice.actions.remove;

export default favouritesSlice.reducer;