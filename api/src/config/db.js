import mongoose from 'mongoose'

// Mongoose Connection Options
mongoose.set('useNewUrlParser', true)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useFindAndModify', false)

export default async function () {
	return mongoose.connect(process.env.API_DB_URI)
}
