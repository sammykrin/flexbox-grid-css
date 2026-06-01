document.addEventListener("DOMContentLoaded", function () {
    //Mobile Sidebar Toggle 
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const mobileOverLay = document.getElementById('mobileOverLay');

    menuToggle.addEventListener('click', function(){
        sidebar.classList.toggle('active');
        mobileOverLay.classList.toggle('active');

        //Change icon based on state
        const icon = menuToggle.querySelector('i');
        if (sidebar.classList.contains ('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else{
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');  
        }
    });
    //close sidebar when clicking on the overlay
    mobileOverLay.addEventListener('active', function () {
        sidebar.classList.remove('active');
        mobileOverLay.classList.remove('active');

        //Change icon back to bars
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });

    //Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');

            //Update icon and save perference 
            const themeIcon = this.querySelector('i');
            if (document.body.classList.contains('darkmode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark')
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme','light'); 
            }
        });


        //close sidebar when clicking outisde on mobile
        document.addEventListener('click', function (e) {
            const isClickInsideSidebar = sidebar.contains(e.target);
            const isClickOnToggle = menuToggle.contains(e.target);

            if (sidebar.classList.contains('active')&&
               !isClickInsideSidebar &&
               !isClickOnToggle) {
                sidebar.classList.remove('active');
                mobileOverLay.classList.remove('active'); 

                //change icon back to bars
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');

            }

        });

        // Load saved theme preferences
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme==='dark'){
            document.body.classList.add('dark-mode');
            const themeIcon = document.querySelector('.theme-toggle i');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun'); 
        }

        //Add hover effect to task bar
        document.querySelectorAll('.task-bar').forEach(task=>{
            task.addEventListener('mosueenter', function () {
                this.style.zIndex = '10';
            });
            task.addEventListener('mosueenter', function(){
                this.style.zIndex = '1';
            });
        });

        //Animate progress rings
        document.querySelectorAll('.progress-ring.progress-fill').forEach(ring=>{
            const circumference = 283; 
            const progressRing = ring.closest('.progress-ring');
            const progressText = progressRing.querySelector('.progress-text').textContent;
            const percentage = parseInt(progressText);
            const offset = circumference -(percentage * circumference / 100);
            ring.style.strokeDashoffest = offset;
        })

});