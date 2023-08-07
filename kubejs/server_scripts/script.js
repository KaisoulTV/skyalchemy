onEvent('block.break', event => {
    if (event.block == "kubejs:inf_dirt") {
		event.cancel()
		event.block.popItem('minecraft:dirt')
	}
})

// Listen to player login event
onEvent('player.logged_in', event => {
  // Check if player doesn't have "starting_items" stage yet
  Utils.server.tell("§eUse the command §c/skyblock§e to control your islands and etc...")
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // Give some items to player
    event.player.give('ftbquests:book')
	event.player.give("exnihilosequentia:oak_seeds")
  }
})

onEvent('recipes', event => {
    event.remove({output: 'projecte:philosophers_stone'})
	event.remove({output: 'excompressum:auto_compressor'})
	event.remove({output: 'excompressum:rationing_auto_compressor'})
    event.shapeless('projecte:philosophers_stone', ['minecraft:dirt','minecraft:dirt','minecraft:dirt','minecraft:dirt'])
})