/*
page-console
chenjianyi
https://github.com/jy1989/page-console.js
2015-09-09
 */
module.exports = function(a) {
    a.initConfig({
        pkg: a.file.readJSON("package.json"),
        uglify: {
            compress: {
                options: {
                    banner: '/*\n<%= pkg.name %>\n<%= pkg.author %>\n<%= pkg.homepage %>\n<%= grunt.template.today("yyyy-mm-dd") %>\n */\n',
                    compress: !0
                },
                files: {
                    "build/<%= pkg.name %>.min.js": [ "src/**/*.js" ]
                }
            },
            betigruntjs: {
                options: {
                    banner: '/*\n<%= pkg.name %>\n<%= pkg.author %>\n<%= pkg.homepage %>\n<%= grunt.template.today("yyyy-mm-dd") %>\n */\n',
                    beautify: !0
                },
                files: {
                    "Gruntfile.js": [ "Gruntfile.js" ]
                }
            },
            betiself: {
                options: {
                    banner: '/*\n<%= pkg.name %>\n<%= pkg.author %>\n<%= pkg.homepage %>\n<%= grunt.template.today("yyyy-mm-dd") %>\n */\n',
                    beautify: !0
                },
                files: {
                    "src/<%= pkg.name %>.js": [ "src/<%= pkg.name %>.js" ]
                }
            }
        },
        jshint: {
            options: {
                eqeqeq: !0,
                trailing: !0
            },
            target: {
                src: [ "src/**/*.js" ]
            }
        },
        watch: {
            scripts: {
                files: [ "src/**/*.js", "Gruntfile.js" ],
                tasks: [ "jshint", "uglify:compress" ]
            },
            livereload: {
                options: {
                    livereload: "<%= connect.options.livereload %>"
                },
                files: [ "index.html", "src/**/*.js" ]
            }
        },
        connect: {
            options: {
                port: 9e3,
                open: !0,
                livereload: 35729,
                hostname: "localhost"
            },
            server: {
                options: {
                    port: 9001,
                    base: "./"
                }
            }
        }
    }), a.loadNpmTasks("grunt-contrib-uglify"), a.loadNpmTasks("grunt-contrib-watch"), 
    a.loadNpmTasks("grunt-contrib-connect"), a.loadNpmTasks("grunt-contrib-jshint"), 
    a.registerTask("betigruntjs", [ "uglify:betigruntjs" ]),a.registerTask("betiself", [ "uglify:betiself" ]), a.registerTask("default", [ "jshint", "uglify:compress", "connect", "watch" ]);
};