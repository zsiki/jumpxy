/******************************************************************************
 *
 * Purpose: Pan&zoom map to given point co-ordinates
 * Author:  Zoltan Siki
 *
 ******************************************************************************
 *
 * Copyright (c) 2013 Zoltan Siki
 *
 * This is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version. See the COPYING file.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with p.mapper; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 ******************************************************************************/
$.extend(PM.Plugin,
{
    JumpXY:
    {
		center_x: NaN,	// center of map in layer coordinates
		center_y: NaN,
		width: 500,	// width of map in layer units
		dlgOptions: {width:190, height:180, left:50, top:50, resizeable:true, newsize:true, container:'pmJumpXYContainer', name:'JumpXY'},

		init: function() {
			if (typeof(PM.ini.pluginsConfig.jumpxy) != 'undefined') { 
				if (typeof(PM.ini.pluginsConfig.jumpxy.width) != 'undefined') {
					this.width = Number(PM.ini.pluginsConfig.jumpxy.width);
				}
			}
		},

		start: function() {
			if (isNaN(this.center_x) || isNaN(this.center_y)) {
				// first call initialize center
				this.center_x = PM.minx_geo + PM.xdelta_geo / 2.0;
				this.center_y = PM.maxy_geo - PM.ydelta_geo / 2.0;
			}
			var url = PM_PLUGIN_LOCATION + '/jumpxy/jumpxydlg.phtml?' +
				'center_x=' + this.center_x + '&center_y=' + this.center_y +
				'&width=' + this.width;
			PM.Dlg.createDnRDlg(this.dlgOptions, "Jump XY", url);
		},

		jump: function() {
			var w = Number($("#jumpxy_xValue").val());
			if (isNaN(w)) {
				alert("Enter numbers");
				return;
			}
			this.center_x = w;

			w = Number($("#jumpxy_yValue").val());
			if (isNaN(w)) {
				alert("Enter numbers");
				return;
			}
			this.center_y = w;

			w = Number($("#jumpxy_width").val());
			if (isNaN(w)) {
				alert("Enter numbers");
				return;
			}
			this.width = w;

			var w2 = this.width / 2.0;
			var x1 = this.center_x - w2;
			var y1 = this.center_y - w2;
			var x2 = this.center_x + w2;
			var y2 = this.center_y + w2;
			var ext = x1.toString() + "+" + y1.toString() + "+" +
				x2.toString() + "+" + y2.toString();
			
			PM.Map.zoom2extent("", "", ext, 1);
		}
	}
});
