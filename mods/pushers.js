elements.up_pusher = {
	color: "#7f7f7f",
	tick: function(pixel) {
		for(i=9; i>=0; i--) {
			if (!isEmpty(pixel.x,pixel.y-1-i,true)) {
				tryMove(pixelMap[pixel.x][pixel.y-1-i],pixel.x,pixel.y-2-i)
			}
		}
	},
	category: "machines",
	insulate: true,
	state: "solid",
}

elements.down_pusher = {
	color: "#7f7f7f",
	tick: function(pixel) {
		for(i=9; i>=0; i--) {
			if (!isEmpty(pixel.x,pixel.y+1+i,true)) {
				tryMove(pixelMap[pixel.x][pixel.y+1+i],pixel.x,pixel.y+2+i)
			}
		}
	},
	category: "machines",
	insulate: true,
	state: "solid",
}

elements.left_pusher = {
	color: "#7f7f7f",
	tick: function(pixel) {
		for(i=9; i>=0; i--) {
			if (!isEmpty(pixel.x-1-i,pixel.y,true)) {
				tryMove(pixelMap[pixel.x-1-i][pixel.y],pixel.x-2-i,pixel.y)
			}
		}
	},
	category: "machines",
	insulate: true,
	state: "solid",
}

elements.right_pusher = {
	color: "#7f7f7f",
	tick: function(pixel) {
		for(i=9; i>=0; i--) {
			if (!isEmpty(pixel.x+1+i,pixel.y,true)) {
				tryMove(pixelMap[pixel.x+1+i][pixel.y],pixel.x+2+i,pixel.y)
			}
		}
	},
	category: "machines",
	insulate: true,
	state: "solid",
}