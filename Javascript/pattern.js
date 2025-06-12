// Write a function printSquare(n) that prints a square of n x n asterisks.
n = 5;

for(i=1; i<=n; i++){
    line = ''
    for(j=1; j<=n; j++){
        line += " *"
    }
    console.log(line)
    // console.log(`\n`)
}

for(i=1;i<=n;i++){
    line='';
    for(j=1; j<=i;j++){
        line += ' *'
    }
    console.log(line)
}

for(i=n; i>=1; i--){
    line=''
    for(j=1; j<=i; j++){
        line+= ' *'
    }
    console.log(line)
}

for(i=1;i<=n;i++){
    line = ''

    for(j=1; j<=n-i; j++){
        line+= ' '
    }
    for(k=1; k<=i;k++){
        line+=' *'
    }
    console.log(line)
}


