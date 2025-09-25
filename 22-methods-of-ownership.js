// Metodos de propiedad 

const player = {
    play : function(id){
        console.log("playing song...", id);
    },

    pause : function(id){
        console.log(`paused..., ${id}`);
    },

    delete : function(id){
        console.log(`deleting song..., ${id}`);

    }
}

console.log(player);
player.play(217);
player.pause(217);
player.delete(217);
