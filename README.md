# jumpxy

jumpxy is a p.mapper plug-in.
The jumpxy plugin can move the map window to a given point defined by co-ordinates and window size.

It contains:
- config.inc: include the other files in pmapper
- jumpxy.js: the JavaScript code for the plugin
- jumpxy_off.gif: image for button
- jumpxydlg.php: GUI to set co-ordinates

Dependencies:
none

How to install:

- Enable plugin by adding a line in config_XXXXX.xml file:

<pmapper>
	<ini>
		<pmapper>
			...
			<plugins>jumpxy</plugins>
			...
		</pmapper>
	</ini>
</pmapper>

- Copy the button image (jumpxy_off.gif) to the corresponding theme directory.

- Opcionally add the plugin parameters by adding lines in config_XXXXX.xml file:
<pmapper>
	<ini>
		<pluginsConfig>
			...
			<jumpxy>
				<width>100</width>
			</jumpxy>
			...
		</pluginsConfig>
	</ini>
</pmapper>
														 
width - default size of window in map units

- Add the jumpxy tool button to the interface in /config/XXXXX/js_config.php file and increase the size of toolbar to give space for the new button
PM.buttonsDefault = {
	...
	options: { ...
		css: {height:'nnnpx'},
		              ---
		...
	buttons: [
		...
		{tool:'jumpxy', name:'JumpXY', run:'PM.Plugin.JumpXY.start'},
		...
	]
}


- optionally extend your local messages (incphp/local/language_xx.php)
$_sl['East coordinate'] = '...';
$_sl['North coordinate'] = '...';
$_sl['Window size'] = '...';

How to use:
- click on jumxy tool
- fill x, y & width in the dialog
- push apply to jump to
- close the dialog window or give another co-ordinates and/or width
