const getAlasan = (cmd, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].cmd === cmd) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].alasan
    }
}

const getLockCmd = (alasan, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].cmd === cmd) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].cmd
    }
}

const getLockCmdPosition = (cmd, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].cmd === cmd) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getPahlawanPosition = (cmd, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].name.toLowerCase() === cmd) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position]
    }
}

module.exports = {getAlasan, getLockCmd, getPahlawanPosition, getLockCmdPosition}
