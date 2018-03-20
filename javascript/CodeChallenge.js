// Without changing the provided lists and dictionaries, create a script that cycles
// through all the parents and prints to the terminal the proper activities for
// their child's age group. When there are no more activities for that parent,
// print “curriculum complete!” and move on to the next parent.
// (Make sure your script accounts for any edge cases in the provided variables!)

const parents = [
    {'parent': 'Henry', 
        'child': {
                'name': 'Calvin', 
                'age': 2
                }
    },
    {'parent': 'Ada', 
        'child': {'name': 'Lily', 'age': 3}
    },
    {'parent': 'Emilia', 
        'child': {'name': 'Petra', 'age': 1}
    },
    {'parent': 'Biff', 
        'child': {'name': 'Biff Jr', 'age': 4}
    },
    {'parent': 'Milo', 
        'child': {}
    }
];
const curriculum  = [
    {
        'age': 1,
        'activity': [
            'Try singing a song together.',
            'Point and name objects.'
            ]
    },
    {
        'age': 2,
        'activity': [
            'Go outside and feel surfaces.',
            'Draw with crayons.',
            'Play with soundmaking toys or instruments.',
            'Look at family pictures together.'
            ]
    },
    {
        'age': 3,
        'activity': [
            'Build with blocks.',
            'Try a simple puzzle.',
            'Read a story together.'
            ]
    }
];



//Want to really shine and show us your chops?  Work in some of these stretch
//1. goals using any tools or libraries you see fit.
//2. Personalize the message output to make it more friendly.
//3. Allow users to input new activities & parents before executing the script.
//4. Print one activity at a time per parent and continue cycling through until
//   all parents have recieved all their activities.
