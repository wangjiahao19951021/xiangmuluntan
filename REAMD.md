echo "# xiangmuluntan" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:wangjiahao19951021/xiangmuluntan.git
git push -u origin master

git remote -v
git remote rm origin