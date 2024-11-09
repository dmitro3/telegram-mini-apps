import { type Plugin } from "chart.js"
import { numberLastPoint } from '../../../shared/constants'

export const showTooltip: Plugin<"line"> = {
  id: "showTooltip",
  afterDraw: (chart, _args, options) => {
    const { ctx } = chart
    ctx.save()

    console.log('showTooltip data ', chart.getDatasetMeta(0).data)

    const { x, y } = chart.getDatasetMeta(0).data[numberLastPoint]

    const widthTooltip = 83
    const heightTooltip = 24
    const marginX = x - 16 - 16
    let colorText = '#fff'

    if (options.gamePhase === 3) {
      colorText = options.btcPrice > options.startBtcPrice ? '#28DA64' : '#FD2D39'
    }

    // container
    ctx.fillStyle = "#1C1C1E94"
    ctx.beginPath()
    ctx.roundRect(marginX, y - 8, widthTooltip, heightTooltip, 8)
    ctx.fill()
    ctx.restore()

    // text
    ctx.font = "14px Inter"
    ctx.fillStyle = colorText

    ctx.textAlign = "center"
    ctx.fillText(
      Number(options.btcPrice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.'),
      marginX + widthTooltip / 2,
      y + 10
    )
    ctx.restore()
  },
}
