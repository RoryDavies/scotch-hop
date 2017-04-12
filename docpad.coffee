# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	# ...

#Plugin config - for datafiles etc ...
plugins: {
    datafiles: 
      dataPaths: [ 'data' ],
      camelCase: true,
      alwaysReload: false
  }   
}

# Export the DocPad Configuration
module.exports = docpadConfig
