module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
        lint: {
            files: ['src/js/*'],
            tasks: ['jshint', 'uglify']
          },
        css: {
            files: ['src/css/*'],
            tasks: ['cssmin']
        },
        html: {
            files: ['src/*.html'],
            tasks: ['html']
        }
      },

    copy: {
        html: {
            src: 'src/*',
            filter: 'isFile',
            dest: 'dist/'
        },
        images: {
            src: 'src/images/*',
            dest: 'dist/'
        }
    },

    jshint: {
        files: ['src/js/scripts.js']
    },

    cssmin: {
        css: {
            files: {
                 'dist/src/css/style.min.css': ['src/css/normalize.css', 'src/css/grid.css', 'src/css/style.css']
             }
         }
     },

     uglify: {
        js: {
            files: {
                'dist/src/js/scripts.min.js': ['src/js/jquery.easing.1.3.js', 'src/js/jquery.stellar.min.js','src/js/waypoints.min.js', 'src/js/scripts.js']
            }
        }
    }
  });

  // Load the tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register all those tasks
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('default', ['copy','cssmin', 'uglify']);

};
