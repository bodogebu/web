module.exports = {
	stylus: {
		src: './src/stylus/app.styl',
		dest: './src/web',
		watch: './src/stylus/**/*.styl'
	},
	react: { 
		src: './src/app/app.jsx',
		dest: './src/web',
		watch: './src/app/**/*.jsx'
	}
};