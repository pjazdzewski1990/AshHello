AshHello
========

Jak uruchomić program:

Skolnuj repozytorium

git clone git@github.com:pjazdzewski1990/AshHello.git

cd AshHello

Stwórz nowy projekt Android z lokalnymi ustawieniami

cordova platform rm android

cordova platform add android

Zainstaluj najnowszą wersję wtyczki

cordova plugin rm 'pl.ug.ash'

cordova plugin add https://github.com/pjazdzewski1990/Ash

Uruchom apliakcję

sh run.sh

=========

Do uruchomienia potrzebne są Cordova Cli oraz Android SDK 
