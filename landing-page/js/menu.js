function toggleNav(num){
    if(num === 1){
        document.getElementById('sidebar-wrapper').classList.add('activation');
    } else {
        document.getElementById('sidebar-wrapper').classList.remove('activation');
    }
}