function zodiac(){
    var birthmonth = document.getElementById("month").value;
    var birthday = document.getElementById("day").value;
    var resulta = "Please Enter Birthdate ! ";

    if (birthmonth == 1 && birthday >=20 || birthmonth == 2 && birthday <= 18){
        resulta = ("AQUARIUS");
        document.getElementById("pic").innerHTML = "<img src='aquarius.png' width=20%>";

        document.getElementById("description").innerHTML="Despite the “aqua” in its name, Aquarius is actually the last air sign of the zodiac. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. ";
        }
        
        if (birthmonth == 2 && birthday >=19 || birthmonth == 3 && birthday <=20){
            resulta = ("PISCES");
            document.getElementById("pic").innerHTML = "<img src='pisces.png' width=20%>";
            document.getElementById("description").innerHTML = "Pisces, a water sign, is the last constellation of the zodiac. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs.";
        }

        if (birthmonth == 3 && birthday >= 21 || birthmonth == 4 && birthday <=19){
            resulta = ("ARIES");
            document.getElementById("pic").innerHTML = "<img src='aries.png' width=20%>";
            document.getElementById("description").innerHTML = "Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations. ";
        
        }

        if (birthmonth == 4 && birthday >=20 || birthmonth == 5 && birthday <=20){
            resulta = ("TAURUS");
            document.getElementById("pic").innerHTML = "<img src='taurus.png' width=20%>";
            document.getElementById("description").innerHTML = "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors. ";
        }

        if (birthmonth == 5 && birthday >=21 || birthmonth == 6 && birthday <=20){
            resulta =("GEMINI");
            document.getElementById("pic").innerHTML = "<img src='gemini.png' width=20%>";
            document.getElementById("description").innerHTML = "Have you ever been so busy that you wished you could clone yourself just to get everything done? That’s the Gemini experience in a nutshell. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself.";
        }

        if (birthmonth == 6 && birthday >=21 || birthmonth == 7 && birthday <=22){
            resulta =("CANCER");
            document.getElementById("pic").innerHTML = "<img src='cancer.png' width=20%>";
            document.getElementById("description").innerHTML = "Cancer is a cardinal water sign. Represented by the crab, this crustacean seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces: For instance, Cancers can effortlessly pick up the energies in a room.";
        }

        if (birthmonth == 7 && birthday >=23 || birthmonth == 8 && birthday <=22){
            resulta=("LEO");
            document.getElementById("pic").innerHTML = "<img src='leo.png' width=20%>";
            document.getElementById("description").innerHTML = "Roll out the red carpet because Leo has arrived. Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves. ";
        }

        if (birthmonth == 8 && birthday >=23 || birthmonth == 9 && birthday <=22){
            resulta =("VIRGO");
            document.getElementById("pic").innerHTML = "<img src='virgo.png' width=20%>";
            document.getElementById("description").innerHTML = "Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice. ";
        }
        
        if (birthmonth == 9 && birthday >=23 || birthmonth == 10 && birthday <=22){
            resulta=("LIBRA");
            document.getElementById("pic").innerHTML = "<img src='libra.png' width=20%>";
            document.getElementById("description").innerHTML = "Libra is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life.";
        }

        if (birthmonth == 10 && birthday >=23 || birthmonth == 11 && birthday <=21){
            resulta =("SCORPIO");
            document.getElementById("pic").innerHTML = "<img src='scorpio.png' width=20%>";
            document.getElementById("description").innerHTML = "Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm.";
        }

        if (birthmonth == 11 && birthday >=22 || birthmonth == 12 && birthday <=21){
            resulta=("SAGITTARIUS");
            document.getElementById("pic").innerHTML = "<img src='sagittarius.png' width=20%>";
            document.getElementById("description").innerHTML = "Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.";
        }
        
        if (birthmonth == 12 && birthday >=22 || birthmonth == 1 && birthday <=19){
            resulta=("CAPRICORN");
            document.getElementById("pic").innerHTML = "<img src='capricorn.png' width=20%>";
            document.getElementById("description").innerHTML = "The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms. ";
        }

        else if (birthmonth>12||birthday>31){
            alert("Please Enter Accurate Date ! ");
        }
        
        document.getElementById("resulta").innerHTML = resulta;
    }

