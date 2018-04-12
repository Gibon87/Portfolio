module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
    autoprefixer: {
      dist: {
        files: {
          'css/style.css': 'css/style.css'
        }
      }
    },
    imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'img/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'images/'
  			}]
  		}
  	},
    watch: {
      css: {
        files: '**/*.sass',
        tasks: ['sass']
      }
    }
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // Default task(s).
  grunt.registerTask('default', ["sass", "autoprefixer","imagemin", "watch"]);
};
